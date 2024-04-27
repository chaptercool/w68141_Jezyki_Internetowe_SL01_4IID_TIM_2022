async function getCryptoData(){
    let url = 'https://api.coincap.io/v2/assets';
    try{
        let res = await fetch(url);
        console.log("Fetching Data");
        return await res.json();
    } catch(error){
        console.log(error);
    }
}

async function renderCryptoData(){
    let currencies = await getCryptoData();
    console.log(currencies.data);
    let html = '';
    currencies.data.forEach(element => {
        let tableRow = `<tr>
                            <td><img src="/crypto/img/other_ui/star-svgrepo-com.svg" alt="" class="table_row_ico"></td>
                            <td class="table_rownum">${element.rank}</td>
                            <td><img src="/crypto/img/other_ui/${element.id}.svg" alt="" class="table_row_currlogo">${element.name} <span class="table_row_abrr">${element.symbol}</span></td>
                            <td>$${element.priceUsd}</td>
                            <td><img src="" alt="" class="table_row_ico"><span class="">${parseFloat(element.changePercent24Hr).toFixed(2) / 2}</span></td>
                            <td><img src="" alt="" class="table_row_ico"><span class="">${parseFloat(element.changePercent24Hr).toFixed(2)}</span></td>
                            <td><img src="" alt="" class="table_row_ico"><span class="">${parseFloat(element.changePercent24Hr).toFixed(2) * 2}</span></td>
                            <td>$${parseInt(element.marketCapUsd)}</td>
                            <td>
                                <div class="table_cell_twodatas">
                                    <span>$${parseInt(element.volumeUsd24Hr)}</span>
                                    <span class="table_row_subnum">${parseInt(element.vwap24Hr)} ${element.symbol}</span>
                                </div>
                            </td>
                            <td><span class="table_row_number">${parseInt(element.supply)} ${parseInt(element.symbol)}</span></td>
                            <td><img src="/crypto/img/stats/stat_rise1.svg" alt="" class="table_row_stat_img"></td>
                        </tr>
                    `;
        html += tableRow;
    });

    let container = document.querySelector('.fetched_data');
    container.innerHTML = html;
}

renderCryptoData();