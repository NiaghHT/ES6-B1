let GPA = (...input) => {
    let inpToan = +document.getElementById('inpToan').value;
    let inpLy = +document.getElementById('inpLy').value;
    let inpHoa = +document.getElementById('inpHoa').value;
    let inpVan = +document.getElementById('inpVan').value;
    let inpSu = +document.getElementById('inpSu').value;
    let inpDia = +document.getElementById('inpDia').value;
    let inpEnglish = +document.getElementById('inpEnglish').value;
    input = [inpToan, inpLy, inpHoa, inpVan, inpSu, inpDia, inpEnglish];
    let output = 0;
    let total = 0;
    let count = 0;

    for (let i in input) {
        total += input[i];
        count += 1;
    }

    output = total / count;
    document.querySelector('#tbKhoi1') = output;
}