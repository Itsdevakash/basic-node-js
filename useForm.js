function useForm(req,resp){

resp.write(`
    
    
      <form action="/submit" method="post">
           <div class="form-row">
                <input 
                 type="text" 
                    name="name"
                    class="form-input" 
                    placeholder="Enter Name" 
                 required
                >
                <button type="submit" class="form-btn">
                    Submit
                 </button>
             </div>
         </form>
    
    
    
    `);

}
module.exports=useForm;