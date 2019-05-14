const Iugu = require("../../models/Iugu");
const Order = require("../../models/Order");
const Log = require("../../models/Log");
const axios = require("axios");

class IuguController {
  async orderStatus(req, res) {
    console.log(req.body.data.id);

    const order = await axios.get(
      `https://api.iugu.com/v1/invoices/${req.body.data.id}`,
      {
        auth: {
          username: process.env.IUGU_KEY,
          password: null
        }
      }
    );

    const customer = await axios.get(
      `https://api.iugu.com/v1/customers/${order.data.customer_id}`,
      {
        auth: {
          username: process.env.IUGU_KEY,
          password: null
        }
      }
    );

    if (order.data.payable_with === "bank_slip") {
      //this.processBankSlip(order.data, customer.data);
    }

    await Log.create({ data: customer.data })
    await Log.create({ data: order.data })

    await Iugu.create({data : req.body});

    return res.json("Order created");
  }

  async processBankSlip(order, customer) {

    return await axios.post(
      "http://hsmapihml.azurewebsites.net/api/Pedido/GerenciaPedidoFromPortal",
      {
        authtoken: "ca07c644521500f775e93b584ca3dd13e85fc783",
        validationtoken: "d8e7cc6b390bea154d29bd7d676856c4eff7fa06",
        username: "cliente",
        licenca: "hsmsa-003",
        app_id: "financeiro",
        data: [
          {
            recebimento: [
              {
                vl_total_recb: "59.00",
                dt_liquidacao_recb: null,
                fl_status_recb: "0",
                id_recebimento_recb: "9333",
                st_cielotid_recb: null,
                id_formapagamento_recb: "0",
                st_nf_recb: null,
                st_errocartao_recb: null,
                st_hashparcelamento_recb: null,
                st_cartaodetalhes_recb: null,
                st_cartaobandeira_recb: null,
                fl_cieloforcarpagamento_recb: "1",
                dt_vencimento_recb: "05/16/2019"
              }
            ],
            st_nome_sac: "Rafael Meira",
            st_nomeref_sac: "Rafael Meira",
            st_cgc_sac: "60548331030",
            st_email_sac: "rafasddsdael.meira@hsm.com.br",
            st_telefone_sac: "987289618",
            st_endereco_sac: "Rua Serra dos Estrondos",
            st_complemento_sac: "casa",
            st_cidade_sac: "Carapicu\u00edba",
            st_estado_sac: "SP",
            st_cep_sac: "06362-360",
            st_inscricao_sac: null,
            tx_observacao_sac: null,
            tx_contatos_sac: null,
            st_diavencimento_sac: "0",
            st_contrato_sac: null,
            dt_cadastro_sac: "05/13/2019",
            dt_alteracao_sincro: null,
            fl_desativar_sac: "0",
            id_sacado_sac: "2964",
            st_sincro_sac: null,
            st_codemp_sac: null,
            st_senha_sac: null,
            campo1: null,
            campo2: null,
            campo3: null,
            campo4: null,
            fl_status_sac: null,
            id_grupo_grp: null,
            st_sacadornome_sac: null,
            st_sacadorcgc_sac: null,
            st_sincroorder_sac: null,
            st_numero_sac: "21",
            dt_desativacao_sac: null,
            dt_emissaorg_sac: null,
            st_sexo_sac: null,
            st_nacionalidade_sac: null,
            dt_nascimento_sac: "05/02/1994",
            st_naturalidade_sac: null,
            st_celular_sac: null,
            st_carteiraidentidade_sac: null,
            dt_emissaocarteira_sac: null,
            st_orgao_sac: "SSP",
            st_numtituloeleitor_sac: null,
            st_titulozona_sac: null,
            st_titulosecao_sac: null,
            dt_emissaotitulo_sac: null,
            st_obssaude_sac: null,
            st_numcertidaonascimento_sac: null,
            st_distcertidaonascimento_sac: null,
            st_cmarcacertidaonascimento_sac: null,
            st_livrocertidaocasamento_sac: null,
            st_folhacertidaocasamento_sac: null,
            st_cartcertidaocasamento_sac: null,
            st_estadocartorio_sac: null,
            dt_certidaocasamento_sac: null,
            fl_situacaomilitar_sac: null,
            st_csmmilitar_sac: null,
            st_certmilitar_sac: null,
            st_rmmilitar_sac: null,
            dt_expedicaomilitar_sac: null,
            st_rg_sac: "438146311",
            st_orgaoexpedicaomilitar_sac: null,
            fl_tipocertidao_sac: null,
            st_numcertidaonascasament_sac: null,
            st_distcertidaonascasament_sac: null,
            st_cmarcacertidaonascasamen_sac: null,
            st_livrocertidaonascasament_sac: null,
            st_folhacertidaonascasament_sac: null,
            st_cartcertidaonascasament_sac: null,
            st_estadocartorionascasamen_sac: null,
            st_bairro_sac: "Jardim Planalto",
            idraca: "0",
            nm_cartao_sac: null,
            nm_mescartaovencimento_sac: null,
            nm_anocartaovencimento_sac: null,
            st_cartaovencimento_sac: null,
            st_cartaobandeira_sac: null,
            st_inscmunicipal_sac: null,
            st_fax_sac: "11987289618",
            st_codigocontabil_sac: null,
            vl_txpis_sac: null,
            vl_txinss_sac: null,
            vl_txirrf_sac: null,
            vl_txcontribuicaosocial_sac: null,
            vl_txcofins_sac: null,
            fl_reterissqn_sac: null,
            fl_reterpis_sac: "0",
            fl_reterinss_sac: "0",
            fl_reterirrf_sac: "0",
            fl_retercontribuicaosocial_sac: "0",
            fl_retercofins_sac: "0",
            fl_pessoajuridica_sac: null,
            id_crmidentificador_sac: null,
            fl_crmsincro_sac: "0",
            st_cepentrega_sac: "06362-360",
            st_enderecoentrega_sac: "Rua Serra dos Estrondos",
            st_numeroentrega_sac: "21",
            st_complementoentrega_sac: "casa",
            st_bairroentrega_sac: "Jardim Planalto",
            st_cidadeentrega_sac: "Carapicu\u00edba",
            st_estadoentrega_sac: "SP",
            st_pontoreferenciaentrega_sac: null,
            fl_mesmoend_sac: "1",
            st_contabancaria_sac: "0",
            st_agencia_sac: "0",
            st_banco_sac: "0",
            fl_pagamentopref_sac: "0",
            id_favorecido_fav: null,
            fl_notificarsms_sac: null,
            fl_optantesimples_sac: "0",
            st_suframa_sac: null,
            st_gateway_sac: null,
            id_forma_frecb: null,
            st_nomecartao_sac: null,
            fl_statuscartao_sac: null,
            st_tidcancelamento_sac: null,
            dt_tentativacancelcartao_sac: null,
            st_campoextragateway_sac: null,
            nm_tentativascancelamento_sac: null,
            dt_congelamento_sac: null,
            fl_sincronizarstatus_sac: "0",
            st_cei_sac: null,
            fl_bloqueioautoignorar_sac: null,
            dt_pendente_sac: null,
            dt_ignorarstatus_sac: null,
            st_chavealteracaocadastral_sac: null,
            fl_tipodesativacao_sac: null,
            dt_notificacaodesativacao_sac: null,
            dt_notificacaocongelar_sac: null,
            vl_txdesconto_sac: null,
            st_pais_sac: "Brasil",
            st_paisentrega_sac: "Brasil",
            fl_entidadepublica_sac: null,
            nm_diascarencia_sac: null,
            fl_comprovantecong_sac: "0",
            dt_bloqueioauto_sac: null,
            nm_versao_sac: "0",
            st_ddd_sac: "11",
            vl_txissqn_sac: null,
            fl_sincronizarmongo_sac: "1",
            st_docsacadoex_sac: null,
            fl_notahomologado_sac: "0",
            fl_naonotificar_sac: "0",
            compo_recebimento: [
              {
                produtos_tags: [
                  {
                    id_tag_tag: "4",
                    st_nome_tag: "Eventos"
                  }
                ],
                id_produto_prd: "211",
                st_descricao_prd: "Streaming HSM Experience",
                fl_servico_prd: "0",
                st_sincro_prd: "ST-EXPER-SUSUMMIT19",
                st_scriptfinalizado_prd: null,
                st_pesobruto_prd: "0.0000",
                nm_largura_prd: "0.00",
                nm_altura_prd: "0.00",
                nm_comprimento_prd: "0.00",
                id_composicao_comp: "18862",
                nm_quantidade_comp: "1",
                st_valor_comp: "59.00",
                id_boleto_comp: "9333",
                link_2via:
                  "https://hsmsa-003.superlogica.net/clients/areadocliente/publico/pedidocobrancas?publickey=36c7c3ba0c522c3893eb6083036bd4ea9a03fb5b&id[]=9333",
                link_2via_json:
                  "https://hsmsa-003.superlogica.net/clients/areadocliente/publico/pedidocobrancas?publickey=a24c707614f922b6526df01d9af28f19f15c6ac8&id[]=9333&render=Json"
              }
            ],
            pedido_endereco: [
              {
                id_endereco_pen: "4133",
                st_numero_pen: "21",
                st_cep_pen: "06362-360",
                st_endereco_pen: "Rua Serra dos Estrondos",
                st_complemento_pen: "casa",
                st_bairro_pen: "Jardim Planalto",
                st_cidade_pen: "Carapicu\u00edba",
                st_estado_pen: "SP",
                st_pontoreferencia_pen: null
              }
            ],
            id_pedido_ped: "6263",
            dt_compra_ped: "05/13/2019 11:38:53",
            fl_status_ped: "0",
            st_frete_ped: null,
            dt_entregaprevista_ped: null,
            nm_quantparcelas_ped: null,
            id_endereco_pen: "4133",
            id_vendedor_for: null,
            st_emailindicacao_ped: null,
            st_nome_cup: null,
            nm_diasuteisentrega_ped: "0",
            id_condominio_cond: null,
            st_descricao_ped: null,
            st_origem_ped: "carrinho",
            fl_sincronizar_ped: "0",
            nome_formatado:
              '<span class=cliente><i class="fa fa-user text-regular"></i> <span class=id>2964</span> - <a href=https://hsmsa-003.superlogica.net/clients/areadocliente/sacados/id/2964?status=2 comportamentos="hint" title="<span class=\'icon fa fa-phone\'></span> &nbsp; 11 987289618 | 11987289618<br><span class=\'icon fa fa-envelope-o\'></span> &nbsp; rafasddsdael.meira@hsm.com.br"><span class=nome>Rafael Meira</span></a></span>',
            endereco_formatado:
              "Rua Serra dos Estrondos, 21 Jardim Planalto\n06362-360 Carapicu\u00edba/SP",
            endereco_formatado_html:
              "Rua Serra dos Estrondos, 21 Jardim Planalto<br />\n06362-360 Carapicu\u00edba/SP<br />",
            total_composicoes: "59",
            forma_pagamento_pedido: "boleto",
            status: "pendente"
          }
        ],
        idCondominioAtual: "1",
        tentativa: "2"
      }
    );
  }
}

module.exports = new IuguController();
