package ja19.Database;

//import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class Database {

    public static final String USER_TABLE = "users";
    public static final String USER_ID = "idusers";
    public static final String USER_FIRST_NAME = "firstname";
    public static final String USER_SECOND_NAME = "secondname";
    public static final String USER_THIRD_NAME = "thirdname";
    public static final String USER_USER_NAME = "username";
    public static final String USER_PASSWORD = "password";
    public static final String USER_COUNTRY = "country";
    public static final String USER_GENDER = "gender";

    private String host = "localhost";
    private String port = "3306";
    private String user = "root";
    private String password = "0987652121";
    private String name = "loginlist";

    Connection dbConnection;

    public Connection _getDbConnection() throws Exception {
        String connectionString = "jdbc:mysql://" + host + ":" + port + "/" + name;
        Class.forName("com.mysql.cj.jdbc.Driver");
        dbConnection = DriverManager.getConnection(connectionString, user, password);
        return dbConnection;
    }

    public void _registerAUser(String firstName, String secondName, String thirdName, String userName, String userPassword, String userCountry, String userGendere) throws Exception {
        String reqToDb = "INSERT INTO " + USER_TABLE + "(" + USER_FIRST_NAME + "," + USER_SECOND_NAME + "," + USER_THIRD_NAME + "," + USER_USER_NAME + "," + USER_PASSWORD + "," + USER_COUNTRY + "," + USER_GENDER + ")VALUES(?,?,?,?,?,?,?)";
        PreparedStatement statement = _getDbConnection().prepareStatement(reqToDb);
        statement.setString(1, firstName);
        statement.setString(2, secondName);
        statement.setString(3, thirdName);
        statement.setString(4, userName);
        statement.setString(5, userPassword);
        statement.setString(6, userCountry);
        statement.setString(7, userGendere);

        statement.executeUpdate();
    }

    public ResultSet _loginAUser(String userName, String userPassword) throws Exception {
        String reqToDb = "SELECT * FROM " + USER_TABLE + " WHERE " + USER_USER_NAME + "=? AND " + USER_PASSWORD + "=?";
        PreparedStatement statement = _getDbConnection().prepareStatement(reqToDb);
        statement.setString(1, userName);
        statement.setString(2, userPassword);
        return statement.executeQuery();
    }
}
