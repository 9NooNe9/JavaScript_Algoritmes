function avalinTavan2(n) {
    let check = 0;
    let s = 0;
    while (check <= n) {
        s++;
        check = 2 ** s;
    }
    return console.log(check);
}

avalinTavan2(1058)
avalinTavan2(32)
avalinTavan2(245)
avalinTavan2(31)