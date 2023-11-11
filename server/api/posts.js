export default defineEventHandler(async(event) => {

  const { category } = getQuery(event); // get query

  const { some } = await readBody(event);

  const { postsDbPath } = useRuntimeConfig();

  console.log('server log >>> ', category, some, postsDbPath);

 

  // const {data } = await $fetch('some api url'); if need get data from api

  //const { list: postCardsList } = await useFetch('https://my-tets-api.com.ua')
  // get list of card posts
  return {
    list: [
      {
        id: '1',
        title: 'Title - 1',
        description: 'description 1'
      },
      {
        id: '2',
        title: 'Title - 2',
        description: 'description 2'
      }
    ]
  }
})