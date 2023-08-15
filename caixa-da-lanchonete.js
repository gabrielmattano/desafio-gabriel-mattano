class CaixaDaLanchonete {
  obterValorItem(nomeItem, quantidade) {
    switch (nomeItem) {
      case 'cafe':
        return 3 * quantidade
      case 'chantily':
        return 1.5 * quantidade
      case 'suco':
        return 6.2 * quantidade
      case 'sanduiche':
        return 6.5 * quantidade
      case 'queijo':
        return 2 * quantidade
      case 'salgado':
        return 7.25 * quantidade
      case 'combo1':
        return 9.5 * quantidade
      case 'combo2':
        return 7.5 * quantidade
    }

    return 0
  }

  checarExisteItem(itens, nomeItem) {
    for (let i = 0; i < itens.length; i++) {
      const itemEQuantidade = itens[i].split(',')
      const item = itemEQuantidade[0]
      if (item === nomeItem) return true
    }
    return false
  }

  modificarValorPeloMetodoPagamento(valor, metodoDePagamento) {
    switch (metodoDePagamento) {
      case 'dinheiro':
        return valor * 0.95
      case 'credito':
        return valor * 1.03
    }

    return valor
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    if (itens.length === 0) return 'Não há itens no carrinho de compra!'
    if (
      metodoDePagamento !== 'dinheiro' &&
      metodoDePagamento !== 'credito' &&
      metodoDePagamento !== 'debito'
    )
      return 'Forma de pagamento inválida!'

    let valor = 0
    for (let i = 0; i < itens.length; i++) {
      const item = itens[i]
      const itemEQuantidade = item.split(',')
      const nomeItem = itemEQuantidade[0]
      const quantidadeItem = Number(itemEQuantidade[1])

      if (quantidadeItem === 0) return 'Quantidade inválida!'

      if (nomeItem === 'chantily') {
        if (!this.checarExisteItem(itens, 'cafe'))
          return 'Item extra não pode ser pedido sem o principal'
      }
      if (nomeItem === 'queijo') {
        if (!this.checarExisteItem(itens, 'sanduiche'))
          return 'Item extra não pode ser pedido sem o principal'
      }

      if (this.obterValorItem(nomeItem, quantidadeItem) === 0) return 'Item inválido!'

      valor += this.obterValorItem(nomeItem, quantidadeItem)
    }

    return `R$ ${this.modificarValorPeloMetodoPagamento(valor, metodoDePagamento)
      .toFixed(2)
      .replace('.', ',')}`
  }
}

export { CaixaDaLanchonete }
