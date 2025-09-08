export default  async  function ({params}:{params:Promise<{param:string}>}){
    const {param} = await params;

    return <><h2>Param</h2>
        {param}
        <h3>Decoded</h3>
        {decodeURIComponent(param)}
    </>
}
