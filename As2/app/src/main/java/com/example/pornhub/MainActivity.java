package com.example.pornhub;

import android.content.ContentValues;
import android.content.Intent;
import android.content.SharedPreferences;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.TypedValue;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.ListView;
import android.widget.TableRow;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    private ListView listView;
    private ArrayList<Item> itemArrayList = new ArrayList<Item>();
    private ArrayList<Item> filteredItemArrayList = new ArrayList<Item>();
    private FrameLayout frameLayout;
    private EditText editText;
    private boolean isntClickedOnSearchButton = true;
    private String searchState = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listView = findViewById(R.id.listView);
        frameLayout = findViewById(R.id.layout);

        _setItemArrayListFromDb();
        _filterItemArrayList();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        _setNonFirstStartApp();
    }

    private class Item {
        public String name, description, path;

        Item(String name, String description, String path) {
            this.name = name;
            this.description = description;
            this.path = path;
        }
    }

    private ArrayList<String> _getCopyOfNamesOfFilteredItemArrayList() {
        ArrayList<String> copyOfNamesOfFilteredItemArrayList = new ArrayList<String>();
        for (Item item : filteredItemArrayList) {
            copyOfNamesOfFilteredItemArrayList.add(item.name);
        }
        return copyOfNamesOfFilteredItemArrayList;
    }

    private void _setItemArrayListFromDb() {
        itemArrayList.clear();

        DBHelper dbHelper = new DBHelper(this);
        SQLiteDatabase sqLiteDatabase = dbHelper.getReadableDatabase();

        if (_isFirstStartApp()) {
            _firstFillToDatabase(sqLiteDatabase);
        }

        Cursor cursor = sqLiteDatabase.query(DBHelper.TABLE_VIDEOS, null, null, null, null, null, null);

        if (cursor.moveToFirst()) {
//            int idIndex = cursor.getColumnIndex(DBHelper.KEY_ID);
            int nameIndex = cursor.getColumnIndex(DBHelper.KEY_NAME);
            int descriptionIndex = cursor.getColumnIndex(DBHelper.KEY_DESCRIPTION);
            int pathIndex = cursor.getColumnIndex(DBHelper.KEY_PATH);
            do {
                itemArrayList.add(new Item(cursor.getString(nameIndex), cursor.getString(descriptionIndex), cursor.getString(pathIndex)));
            } while (cursor.moveToNext());
        } else {
            Toast.makeText(this, "Database is empty.", Toast.LENGTH_SHORT).show();
        }

        cursor.close();
        dbHelper.close();
    }

    private void _setNonFirstStartApp() {
        SharedPreferences sharedPreferences = getPreferences(MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putBoolean("isFirstStartApp", false);
        editor.apply();
    }

    private boolean _isFirstStartApp() {
        SharedPreferences sharedPreferences = getPreferences(MODE_PRIVATE);
        return sharedPreferences.getBoolean("isFirstStartApp", true);
    }

    private void _firstFillToDatabase(SQLiteDatabase sqLiteDatabase) {
        try {
            InputStream inputStream = this.getResources().openRawResource(R.raw.database_to_fill);
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

            String line = bufferedReader.readLine();
            while (line != null) {
                ContentValues contentValues = new ContentValues();
                contentValues.put(DBHelper.KEY_NAME, line);
                line = bufferedReader.readLine();
                contentValues.put(DBHelper.KEY_DESCRIPTION, line);
                line = bufferedReader.readLine();
                contentValues.put(DBHelper.KEY_PATH, line);
                line = bufferedReader.readLine();
                line = bufferedReader.readLine();

                sqLiteDatabase.insert(DBHelper.TABLE_VIDEOS, null, contentValues);
                contentValues.clear();
            }

            bufferedReader.close();
            inputStreamReader.close();
            inputStream.close();
        } catch (Exception error) {
            error.printStackTrace();
        }
    }


    private void _openPageActivity(int indexOfItem) {
        Intent intent = new Intent(this, Page.class);
        intent.putExtra("title", filteredItemArrayList.get(indexOfItem).name);
        intent.putExtra("description", filteredItemArrayList.get(indexOfItem).description);
        intent.putExtra("path", filteredItemArrayList.get(indexOfItem).path);
        startActivity(intent);
    }

    private void _filterItemArrayList() {
        filteredItemArrayList.clear();
        for (Item item : itemArrayList) {
            if (item.name.toLowerCase().trim().contains(searchState.toLowerCase().trim())) {
                filteredItemArrayList.add(item);
            }
        }

        ArrayAdapter<String> arrayAdapter = new ArrayAdapter<String>(this, com.google.android.material.R.layout.support_simple_spinner_dropdown_item, _getCopyOfNamesOfFilteredItemArrayList());
        listView.setAdapter(arrayAdapter);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                _openPageActivity(i);
            }
        });
    }

    public void onSearchButtonClick(View view) {
        if (isntClickedOnSearchButton) {
            editText = new EditText(this);
            editText.setTextAlignment(EditText.TEXT_ALIGNMENT_CENTER);
            editText.setHint(R.string.search);
            editText.setTextSize(TypedValue.COMPLEX_UNIT_SP, 21f);
            editText.setLayoutParams(new TableRow.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.WRAP_CONTENT, 1.0f));
            editText.setEms(10);
            frameLayout.addView(editText);

            editText.addTextChangedListener(new TextWatcher() {
                @Override
                public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                }

                @Override
                public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                    searchState = charSequence.toString();
                    _filterItemArrayList();
                }

                @Override
                public void afterTextChanged(Editable editable) {
                }

            });

            isntClickedOnSearchButton = false;
        }
//        _startVideoPlayerActivity("http://c1.cdnwe.com/uploads_2ec1a2450919fffb135d10e8c2d3da66/31072/BySex_Net_31072_720p.mp4");
//        Toast.makeText(this, "isFirstStart == " + _isFirstStartApp(), Toast.LENGTH_LONG).show();
    }
}