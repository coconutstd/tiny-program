const URL = "https://bofl58pbrh.execute-api.ap-northeast-2.amazonaws.com/dev/randomAnswer"

function main() {
    const id = document.getElementById('btn');
    id.addEventListener("click", async (event) => {
        const res = await fetch(URL, {
            method: "GET"
        });
        const json = await res.json();
        document.getElementById('text').innerHTML = json;
    });
}

window.addEventListener("load", function(event) {
    main();
});