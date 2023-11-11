export default defineEventHandler(async (event) => {

  const { category } = event.context.params;

  console.log('server log dynamic route >>> ', category);
  
 
  return {
    test: '11111'
  }
})