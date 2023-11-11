export default defineEventHandler(async (event) => {

  const { category, id } = getQuery(event); // get query

  // const { some } = await readBody(event);

  const { postsDbPath } = useRuntimeConfig();

  console.log('server log description >>> ', category, id, postsDbPath);



  // const {data } = await $fetch('some api url'); if need get data from api

  //const { list: postCardsList } = await useFetch('https://my-tets-api.com.ua')
  // get one item form json for category and id 
  return {
    id: '1',
    title: 'Title - 1',
    description: 'description 1'
  }
})