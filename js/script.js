
d = new Date();
hour = d.getHours();

if(hour < 6){
    document.getElementById('saudacao').innerText = "boa noite!";
}else if(hour < 12){
    document.getElementById('saudacao').innerText = "bom dia!";
}else if(hour < 18){
    document.getElementById('saudacao').innerText = "boa tarde!";
}else{
    document.getElementById('saudacao').innerText = "boa noite!";
};

function _datatable (idTabela, ordenaColuna, ordenaForma, quantidadePagina = 10){
    $('#' + idTabela).DataTable({
        "order": [[ ordenaColuna, ordenaForma ]],
        "pageLength": quantidadePagina,
        "language": {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "Mostrar _MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    });
}

$ (function () {
    var json = {
        '0': '{"Id":"1","idAdministradora":"2","CNPJ":"17.469.667\/0001-30","Contratado":"3 Z ADMINISTRADORA","UF":"AC","Estado":"Acre","Telefone_1":"800-591-6397","Whatsapp_telefone_1":"Sim","Telefone_2":"(69) 3533-7019","Whatsapp_telefone_2":"Nao","email":"3z.par.norte@gmail.com","obs":""}',

        '1': '{"Id":"5","idAdministradora":"3","CNPJ":"14.097.709\/0001-61","Contratado":"FARAO","UF":"AL","Estado":"Alagoas","Telefone_1":"(82) 9930-00909","Whatsapp_telefone_1":"Sim","Telefone_2":"(82) 3021-0332","Whatsapp_telefone_2":"Nao","email":"par.al@faraoparticipacoes.com.br","obs":""}',

        '2': '{"Id":"6","idAdministradora":"4","CNPJ":"17.469.667\/0001-30","Contratado":"3 Z ADMINISTRADORA","UF":"AP","Estado":"Amapá","Telefone_1":"800-591-6397","Whatsapp_telefone_1":"Sim","Telefone_2":"(91) 3197-1657","Whatsapp_telefone_2":"Nao","email":"3z.par.norte@gmail.com","obs":""}',

        '3': '{"Id":"2","idAdministradora":"2","CNPJ":"14.097.709\/0001-61","Contratado":"3 Z ADMINISTRADORA","UF":"AM","Estado":"Amazonas","Telefone_1":"800-591-6397","Whatsapp_telefone_1":"Sim","Telefone_2":"(91) 3197-1657","Whatsapp_telefone_2":"Nao","email":"3z.par.norte@gmail.com","obs":""}',

        '4': '{"Id":"7","idAdministradora":"5","CNPJ":"17.469.667\/0001-30","Contratado":"3 Z ADMINISTRADORA","UF":"BA","Estado":"Bahia","Telefone_1":"(27) 9960-03775","Whatsapp_telefone_1":"Sim","Telefone_2":"(71) 3190-8190","Whatsapp_telefone_2":"Nao","email":"3z.bahia01@gmail.com","obs":""}',

        '5': '{"Id":"30","idAdministradora":"30","CNPJ":"14.097.709\/0001-61","Contratado":"FARAO","UF":"CE","Estado":"Ceará","Telefone_1":"(85) 9943-28434","Whatsapp_telefone_1":"Sim","Telefone_2":"(85) 3046-3470","Whatsapp_telefone_2":"Nao","email":"par.ce@faraoparticipacoes.com.br","obs":""}',

        '6': '{"Id":"10","idAdministradora":"8","CNPJ":"17.469.667\/0001-30","Contratado":"PADRA","UF":"DF","Estado":"Distrito Federal","Telefone_1":"800-591-6398","Whatsapp_telefone_1":"Sim","Telefone_2":"(61) 3686-1340","Whatsapp_telefone_2":"Nao","email":"padra.brasilia@gmail.com","obs":""}',

        '7': '{"Id":"11","idAdministradora":"9","CNPJ":"17.469.667\/0001-30","Contratado":"3 Z ADMINISTRADORA","UF":"ES","Estado":"Espírito Santo","Telefone_1":"(27) 9960-03775","Whatsapp_telefone_1":"Sim","Telefone_2":"(27) 4042-8353","Whatsapp_telefone_2":"Nao","email":"3z.espiritosanto@gmail.com","obs":""}',

        '29': '{"Id":"50","idAdministradora":"50","CNPJ":"17.469.667\/0001-30","Contratado":"PADRA","UF":"GO","Estado":"Goiás","Telefone_1":"800-591-6398","Whatsapp_telefone_1":"Sim","Telefone_2":"(62) 3413-9943","Whatsapp_telefone_2":"Nao","email":"padra.goias@gmail.com","obs":""}',

        // '8': '{"Id":"12","idAdministradora":"10","CNPJ":"14.097.709\/0001-61","Contratado":"INOVARE NEG\u00d3CIOS IMOBILI\u00c1RIOS E GEST\u00c3O CONDOMINIAL LTDA","UF":"GO","Estado":"Goiás","Telefone_1":"800-878-2828","Whatsapp_telefone_1":"Sim","Telefone_2":"(62) 3142-1088","Whatsapp_telefone_2":"Nao","email":"par.inovare.go@gmail.com","obs":""}',

        '9': '{"Id":"13","idAdministradora":"11","CNPJ":"14.097.709\/0001-61","Contratado":"FARAO","UF":"MA","Estado":"Maranhão","Telefone_1":"(98) 9852-41614","Whatsapp_telefone_1":"Sim","Telefone_2":"","Whatsapp_telefone_2":"Nao","email":"par.ma@faraoparticipacoes.com.br","obs":""}',

        '10': '{"Id":"16","idAdministradora":"14","CNPJ":"03.875.232\/0001-81","Contratado":"PADRA","UF":"MT","Estado":"Mato Grosso","Telefone_1":"800-591-6398","Whatsapp_telefone_1":"Sim","Telefone_2":"(65) 4042-3420","Whatsapp_telefone_2":"Nao","email":"padra.matogrosso@gmail.com","obs":""}',

        '11': '{"Id":"15","idAdministradora":"13","CNPJ":"17.469.667\/0001-30","Contratado":"PADRA","UF":"MS","Estado":"Mato Grosso do Sul","Telefone_1":"800-591-6398","Whatsapp_telefone_1":"Sim","Telefone_2":"(65) 4042 3420","Whatsapp_telefone_2":"Nao","email":"padra.mgs@gmail.com","obs":""}',

        '12': '{"Id":"14","idAdministradora":"12","CNPJ":"17.469.667\/0001-30","Contratado":"3 Z ADMINISTRADORA","UF":"MG","Estado":"Minas Gerais","Telefone_1":"800-591-6397","Whatsapp_telefone_1":"Sim","Telefone_2":"(31) 3157-4787","Whatsapp_telefone_2":"Nao","email":"3z.minasgerais01@gmail.com","obs":""}',

        '13': '{"Id":"8","idAdministradora":"4","CNPJ":"17.469.667\/0001-30","Contratado":"3 Z ADMINISTRADORA","UF":"PA","Estado":"Pará","Telefone_1":"800-591-6397","Whatsapp_telefone_1":"Sim","Telefone_2":"(91) 3197-1657","Whatsapp_telefone_2":"Nao","email":"3z.par.norte@gmail.com","obs":""}',

        '14': '{"Id":"18","idAdministradora":"15","CNPJ":"14.097.709\/0001-61","Contratado":"FARAO","UF":"PB","Estado":"Paraíba","Telefone_1":"(83) 9918-95800","Whatsapp_telefone_1":"Sim","Telefone_2":"","Whatsapp_telefone_2":"Nao","email":"par.pb@faraoparticipacoes.com.br","obs":""}',

        '15': '{"Id":"19","idAdministradora":"17","CNPJ":"17.469.667\/0001-30","Contratado":"PADRA","UF":"PR","Estado":"Paraná","Telefone_1":"800-591-6398","Whatsapp_telefone_1":"Sim","Telefone_2":"(41) 3797-9474","Whatsapp_telefone_2":"Nao","email":"padra.parana@gmail.com","obs":""}',

        '16': '{"Id":"17","idAdministradora":"15","CNPJ":"14.097.709\/0001-61","Contratado":"FARAO","UF":"PE","Estado":"Pernambuco","Telefone_1":"(81) 9891-04778","Whatsapp_telefone_1":"Sim","Telefone_2":"","Whatsapp_telefone_2":"Nao","email":"par.pe@faraoparticipacoes.com.br","obs":""}',

        '17': '{"Id":"31","idAdministradora":"31","CNPJ":"14.097.709\/0001-61","Contratado":"FARAO","UF":"PI","Estado":"Piauí","Telefone_1":"(86) 9957-17147","Whatsapp_telefone_1":"Sim","Telefone_2":"","Whatsapp_telefone_2":"Nao","email":"par.pi@faraoparticipacoes.com.br","obs":""}',

        '18': '{"Id":"21","idAdministradora":"18","CNPJ":"21.698.624\/0001-02","Contratado":"IMPERIAL","UF":"RJ","Estado":"Rio de Janeiro","Telefone_1":"(21) 3849-4150","Whatsapp_telefone_1":"Sim","Telefone_2":"(21) 3849-4150","Whatsapp_telefone_2":"Nao","email":"atendimentorj@imperialrio.com.br","obs":""}',

        '20': '{"Id":"23","idAdministradora":"22","CNPJ":"21.698.624\/0001-02","Contratado":"FARAO","UF":"RN","Estado":"Rio Grande do Norte","Telefone_1":"(84) 9993-00571","Whatsapp_telefone_1":"Sim","Telefone_2":"(84) 3025-7123","Whatsapp_telefone_2":"Nao","email":"par.rn@faraoparticipacoes.com.br","obs":""}',

        '30': '{"Id":"40","idAdministradora":"29","CNPJ":"17.469.667\/0001-30","Contratado":"3 Z ADMINISTRADORA","UF":"RO","Estado":"Rondônia","Telefone_1":"800-591-6397","Whatsapp_telefone_1":"Sim","Telefone_2":"(69) 3533-7019","Whatsapp_telefone_2":"Nao","email":"3z.par.norte@gmail.com","obs":""}',

        '21': '{"Id":"24","idAdministradora":"23","CNPJ":"14.097.709\/0001-61","Contratado":"PADRA","UF":"RS","Estado":"Rio Grande do Sul","Telefone_1":"800-591-6398","Whatsapp_telefone_1":"Sim","Telefone_2":"(51) 2399-0149","Whatsapp_telefone_2":"Nao","email":"padra.riograndedosul@gmail.com","obs":""}',

        //'22': '{"Id":"3","idAdministradora":"2","CNPJ":"14.097.709\/0001-61","Contratado":"INOVARE NEG\u00d3CIOS IMOBILI\u00c1RIOS E GEST\u00c3O CONDOMINIAL LTDA","UF":"RO","Estado":"Rondônia","Telefone_1":"800-878-2828","Whatsapp_telefone_1":"Sim","Telefone_2":"(69) 3533-8898","Whatsapp_telefone_2":"Nao","email":"par.inovare.norte@gmail.com","obs":""}',
        
        '23': '{"Id":"4","idAdministradora":"2","CNPJ":"17.469.667\/0001-30","Contratado":"3 Z ADMINISTRADORA","UF":"RR","Estado":"Roraima","Telefone_1":"800-591-6397","Whatsapp_telefone_1":"Sim","Telefone_2":"(69) 3533-7019","Whatsapp_telefone_2":"Nao","email":"3z.par.norte@gmail.com","obs":""}',

        '24': '{"Id":"20","idAdministradora":"17","CNPJ":"17.469.667\/0001-30","Contratado":"PADRA","UF":"SC","Estado":"Santa Catarina","Telefone_1":"800-591-6398","Whatsapp_telefone_1":"Sim","Telefone_2":"(48) 4042-1070","Whatsapp_telefone_2":"Nao","email":"padra.santacatarina@gmail.com","obs":""}',

        '25': '{"Id":"9","idAdministradora":"6","CNPJ":"17.469.667\/0001-30","Contratado":"3 Z ADMINISTRADORA","UF":"SP","Estado":"São Paulo","Telefone_1":"(11) 5194-3515","Whatsapp_telefone_1":"Nao","Telefone_2":"","Whatsapp_telefone_2":"Nao","email":"3z.saopaulo@gmail.com","obs":""}',

        // '26': '{"Id":"28","idAdministradora":"28","CNPJ":"21.698.624\/0001-02","Contratado":"ALL GESTAO IMOBILIARIA","UF":"SP","Estado":"São Paulo","Telefone_1":"(11) 9164-78064","Whatsapp_telefone_1":"Sim","Telefone_2":"(11) 2738-5826","Whatsapp_telefone_2":"Nao","email":"cobranca2sp@allgestao.com.br", "obs":"Capital, Região Metropolitana e Baixada Santista"}',

        '27': '{"Id":"27","idAdministradora":"27","CNPJ":"17.469.667\/0001-30","Contratado":"3 Z ADMINISTRADORA","UF":"SE","Estado":"Sergipe","Telefone_1":"(27) 9960-03775","Whatsapp_telefone_1":"Sim","Telefone_2":"(79) 3142-3262","Whatsapp_telefone_2":"Nao","email":"3z.sergipe@gmail.com","obs":""}',

        '28': '{"Id":"29","idAdministradora":"29","CNPJ":"17.469.667\/0001-30","Contratado":"PADRA","UF":"TO","Estado":"Tocantins","Telefone_1":"800-591-6398","Whatsapp_telefone_1":"Sim","Telefone_2":"(63) 2104-1280","Whatsapp_telefone_2":"Nao","email":"padra.tocantins@gmail.com","obs":""}'};


    var array = Object.keys(json).map(i => JSON.parse(json[Number(i)]));

    var estadosPar = array.map(entrada => {

        var estadoPar = entrada.UF
            var telefoneA = entrada.Telefone_1
            var telefoneALimpo = telefoneA.replace(/[^0-9]/g, '').trim()
            var telefoneB = entrada.Telefone_2
            var telefoneBLimpo = telefoneB.replace(/[^0-9]/g, '').trim()
            var whatsA = entrada.Whatsapp_telefone_1
            var whatsB = entrada.Whatsapp_telefone_2
            var IdAdm = entrada.Id
            var dadosEmail = entrada.email

                    var linha =
                        `<tr> 
                            <td>${entrada.Contratado}</td> 
                            <td>${entrada.Estado}<br>${entrada.obs}</td>
                            <td style="white-space: nowrap;" id='C${IdAdm}'>${telefoneA}</td>
                            <td style="white-space: nowrap;" id='D${IdAdm}'>${telefoneB}</td>
                            <td><a target="_blank" href="mailto:${dadosEmail}" class="cursor-pointer" style="color:#48586C"> ${entrada.email}</a></td>
                        </tr>`;
                        //console.log(`<td class='${estadoPar}' style="white-space: nowrap;" id='${IdAdm}'>${telefoneA}</td>`);
                    
                    $(linha).appendTo('#tblAdministradora>tbody');
                
            
                switch (whatsA){
                    case "Sim":
                        $('#C'+IdAdm).html(`
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=55${telefoneALimpo}&text=Olá.%20Solicito%20atendimento%20para%20meu%20contrato%20de%20arrendamento" class="cursor-pointer" style="text-decoration:none; color:green;">
                                <i class="fab fa-whatsapp"></i> ${telefoneA}
                            </a>`);
                    break 
                    case "Nao":
                        $('#C'+IdAdm).html(`<a target="_blank" href="tel:+55${telefoneALimpo}" class="cursor-pointer" style="text-decoration:none; color:#005ca9;">
                        <i class="fas fa-phone"></i> ${telefoneA}
                    </a>`);
                    break
                }

                switch (whatsB){
                    case "Sim":
                        $('#D'+IdAdm).html(`<a target="_blank" href="https://api.whatsapp.com/send?phone=55${telefoneBLimpo}&text=Olá.%20Solicito%20atendimento%20para%20meu%20contrato%20de%20arrendamento" class="cursor-pointer" style="text-decoration:none; color:green;">
                            <i class="fab fa-whatsapp"></i> ${telefoneB}
                        </a>`);
                    break 
                    case "Nao":
                        $('#D'+IdAdm).html(`<a target="_blank" href="tel:+55${telefoneBLimpo}" class="cursor-pointer" style="text-decoration:none; color:#005ca9;">
                        <i class="fas fa-phone"></i> ${telefoneB}
                    </a>`);
                    break
                }
    });

    _datatable('tblAdministradora', '1', 'asc', 10)

    $(document).on('change', '#Estado', function(){
        var dadosEstado = $(this).val();
        $('#tabelaGeral').css('display','none');
        $('#dadosAdm').css('display','block');

        var estadosPar = array.map(entrada => {
            var estadoPar = entrada.UF
            var telefoneA = entrada.Telefone_1
            var telefoneALimpo = telefoneA.replace(/[^0-9]/g, '').trim()
            var telefoneB = entrada.Telefone_2
            var telefoneBLimpo = telefoneB.replace(/[^0-9]/g, '').trim()
            var whatsA = entrada.Whatsapp_telefone_1
            var whatsB = entrada.Whatsapp_telefone_2
            var IdAdm = entrada.Id
            var dadosEmail = entrada.email

            if (dadosEstado == estadoPar){
                    var linha =
                        `<tr> 
                            <td class='${estadoPar}'>${entrada.Contratado}</td> 
                            <td class='${estadoPar}'>${entrada.Estado}<br>${entrada.obs}</td>
                            <td class='${estadoPar}' style="white-space: nowrap;" id='${IdAdm}'>${telefoneA}</td>
                            <td class='${estadoPar}' style="white-space: nowrap;" id='B${IdAdm}'>${telefoneB}</td>
                            <td class='${estadoPar}'><a target="_blank" href="mailto:${dadosEmail}" class="cursor-pointer" style="color:#48586C"> ${entrada.email}</a></td>
                        </tr>`;
                    
                    $(linha).appendTo('#tblDadosAdm>tbody');
                
            
                switch (whatsA){
                    case "Sim":
                        $('#'+IdAdm).html(`
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=55${telefoneALimpo}&text=Olá.%20Solicito%20atendimento%20para%20meu%20contrato%20de%20arrendamento" class="cursor-pointer" style="text-decoration:none; color:green;">
                                <i class="fab fa-whatsapp"></i> ${telefoneA}
                            </a>`);
                    break 
                    case "Nao":
                        $('#'+IdAdm).html(`<a target="_blank" href="tel:+55${telefoneALimpo}" class="cursor-pointer" style="text-decoration:none; color:#005ca9;">
                        <i class="fas fa-phone"></i> ${telefoneA}
                    </a>`);
                    break
                }

                switch (whatsB){
                    case "Sim":
                        $('#B'+IdAdm).html(`<a target="_blank" href="https://api.whatsapp.com/send?phone=55${telefoneBLimpo}&text=Olá.%20Solicito%20atendimento%20para%20meu%20contrato%20de%20arrendamento" class="cursor-pointer" style="text-decoration:none; color:green;">
                            <i class="fab fa-whatsapp"></i> ${telefoneB}
                        </a>`);
                    break 
                    case "Nao":
                        $('#B'+IdAdm).html(`<a target="_blank" href="tel:+55${telefoneBLimpo}" class="cursor-pointer" style="text-decoration:none; color:#005ca9;">
                        <i class="fas fa-phone"></i> ${telefoneB}
                    </a>`);
                    break
                }
            
            } else{
                $('.'+estadoPar).remove();
            }
            
        });
    })

})

function mostraTudo(){
    $('#tabelaGeral').css("display", "block");
    $('#dadosAdm').css('display','none');
    $('#Estado').val('');
}
