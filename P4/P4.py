import requests, threading, random;

def set_interval(func, sec):
    """
    Функция для вызыва функции через определённое время:
    set_interval(func, sec);
    func == имя фукции без ();
    sec == время в секундах;
    """
    def func_wrapper():
        set_interval(func, sec)
        func()
    t = threading.Timer(sec, func_wrapper)
    t.start()
    return t


def _getRequest(server, param):#при разрыве можно заново получать ключ от сервера long poll
    """
    Функция для запроса и обработки запроса:
    _getRequest(server, param);
    server == ссылка сервера;
    param == параметры в json словаре;
    """
    r = requests.get("https://{0}".format(server), params=param);
    return r.json();


access_token = "9ee4bcff5db1eca3a295d8d43cdff2d1eb9468af10995cd101abc4eb829d148eabbaf02e6a6c6bb5ae9b2";

paramForGetLongPollServer = { "need_pts": "1", "lp_version": "12", "v": "5.131" };
paramForGetLongPollServer["access_token"] = access_token;
serverForGetLongPollServer = "api.vk.com/method/messages.getLongPollServer";

resultOfGetLongPollServer = _getRequest(serverForGetLongPollServer, paramForGetLongPollServer);

paramForGetLongPoll = { "act": "a_check", "key": resultOfGetLongPollServer["response"]["key"], "ts": resultOfGetLongPollServer["response"]["ts"], "wait": "25", "mode": "2", "version": "2" };
serverForGetLongPoll = resultOfGetLongPollServer["response"]["server"];

paramForSend = { "v": "5.131" };
paramForSend["access_token"] = access_token;
serverForSend = "api.vk.com/method/messages.send"

tempOfMassages = [];

def _botStart():
    global serverForGetLongPoll, paramForGetLongPoll, paramForSend, serverForSend;
    ticOfBot = _getRequest(serverForGetLongPoll, paramForGetLongPoll);
    paramForGetLongPoll["ts"] = str(ticOfBot["ts"]);
    print(ticOfBot);
    for i in range(0, len(ticOfBot["updates"])):
        if ticOfBot["updates"][i][0] == 4 and ((ticOfBot["updates"][i][2] & (1 << 1)) == 0):
            paramForSend["random_id"] = str(round(random.uniform(0, 2147483646)));
            if (int(ticOfBot["updates"][i][3]) - 2000000000) > 0:
                paramForSend["chat_id"] = str(int(ticOfBot["updates"][i][3]) - 2000000000);
                paramForSend["user_id"] = ticOfBot["updates"][i][3];
                paramForSend.pop("user_id");
            else:
                paramForSend["chat_id"] = str(int(ticOfBot["updates"][i][3]) - 2000000000);
                paramForSend["user_id"] = ticOfBot["updates"][i][3];
                paramForSend.pop("chat_id");
            paramForSend["message"] = ticOfBot["updates"][i][5];
            _getRequest(serverForSend, paramForSend);

set_interval(_botStart, 21);