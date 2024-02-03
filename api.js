
function apijs(){
    $.ajax({
        url: "https://fabiooliveira.cloud/atividade_final/",
        type: 'GET',
        dataType:'json',
        data:{
            'api_key': 'aac1259dfa2c6c5mhe508f34e52bb990'
        },
        success:function(data){
            for (var i=0; i<data.length; i++ ) {
                var jogo = `
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="brasao"> <div></div>
                            <div>
                                <div class="col-md-4">
                                    <img src="${data[i].brasao_time_um}" class="card-img" alt="...">
                                </div>
                                <div class="col-md-4">
                                    <img src="${data[i].brasao_time_dois}" class="card-img" alt="...">
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${data[i].time_um} ${data[i].gols_time_um}  X  ${data[i].gols_time_dois} ${data[i].time_dois}</h5>
                                    <p class="card-text"><strong>Data:</strong> ${data[i].data}</p>
                                    <p class="card-text"><strong>Local:</strong> ${data[i].local}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $("#conteudo").append(jogo);
            }
        },
        error:function(xhr, status,error){
            console.log("requisição falhou", status,error);
        },
    });
}

$(document).ready(function(){
    apijs();
});