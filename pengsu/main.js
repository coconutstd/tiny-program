const URL = "https://xvqtmkgki7.execute-api.us-east-1.amazonaws.com/default/departAlarm"

function main() {
    const pengsu = document.getElementById('pengsu');
    pengsu.addEventListener('click', async () => {
        let result = confirm('출발 메세지를 보내겠나?');
        if (result) {
            if(localStorage.getItem('isPengsu') === 'True'){
                alert('이미 메세지를 보내셨습니다');
            } else {
                localStorage.setItem('isPengsu', 'True');
                const res = await fetch(URL, {
                    method: "GET"
                });
                if (res.status === 200) {
                    alert('성공적으로 메세지를 보냈습니다');
                } else {
                    alert('뭔가 오류가...')
                }
            }
        } else {
            console.log('실패');
        }
    })
}

window.addEventListener("load", function(event) {
    main();
});

window.addEventListener("unload", () => {
    localStorage.setItem('isPengsu', 'False');
});