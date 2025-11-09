function digitalRoot(n) {
    n = String(n);
    while (n.length > 1) {
        let total = 0;
        let strSplit = n.split('');
        for (let j = 0; j < strSplit.length; j++) {
            total += Number(strSplit[j]);
        }
        n = String(total);
        console.log(n);
    }
}
digitalRoot(942);
digitalRoot(132189);
digitalRoot(493193);