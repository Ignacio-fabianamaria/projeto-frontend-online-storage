export async function getCategories() {
  // https://api.mercadolibre.com/sites/MLB/categories
  // https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
  const api1 = ('https://api.mercadolibre.com/sites/MLB/categories');
  try {
    const endpoint = await fetch(api1);
    const resultado = await endpoint.json();
    return await resultado;
  } catch (error) {
    throw new Error('You must provide an url');
  }
}
console.log('string');
getCategories();
// Implemente aqui teste requisito 1
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiIdQuery = (`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  try {
    const endpoint = await fetch(apiIdQuery);
    const resultado = await endpoint.json();
    return resultado;
  } catch (error) {
    throw new Error('You must provide an url');
  }
}
// Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você :slightly_smiling_face:
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
