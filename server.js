const express=require('express');
const { serialize } = require('v8');
const fs =require('fs');


const app=express();
app.use(express.json({extended:false}));

app.post('/verify',async(req,res)=>
    {
       
        const suduko_json = await fs.readFileSync('./suduko.json','utf-8');
        let suduko_js=JSON.parse(suduko_json);
        const bord =suduko_js["bord"];

        let counter=Number(suduko_js["counter"]);
        
        /*let row and colum random number */
        let [row1,col1]=suduko_js["index"];

        /*get number from client*/

        const clientnumber=Number(req.body.number);
        
        
        //row test
        for(let i=0;i<9;i++)
        {
            if(bord[row1][i]===clientnumber)
            {   
                init();
                return res.status(200).json({message:'Fail',bord:bord});
            }
        }
        //col test
        for(let i=0;i<9;i++)
        {
            if(bord[i][col1]===clientnumber)
            {  
                let board= [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
                let ref={"index":[0,0],"counter":1,"bord":bord};
                await fs.writeFileSync(`./suduko.json`,JSON.stringify(ref));
                return res.status(200).json({message:'Fail',bord:bord});
            }
        }

        //     
        if(counter===10){
            let board= [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
            let ref={"index":[0,0],"counter":1,"bord":bord};
            await fs.writeFileSync(`./suduko.json`,JSON.stringify(ref));
            return res.json({message:'Valid',bord:bord});
           
        }else{

            counter=counter+1;
            bord[row1][col1]=clientnumber;
            /*let row and colum random number */
            let {row ,col}=random(bord);
            let ref={"index":[row,col],"counter":counter,"bord":bord};
            await fs.writeFileSync(`./suduko.json`,JSON.stringify(ref));


            
            /*sent col and row number to client*/
            let respons={message:`row:${row} and colum:${col}?`, bord:bord}
            return res.status(200).json(respons);
       

        }
    }
)



function random(bord) {
    let row = Math.floor(Math.random() * Math.floor(9));
    let col = Math.floor(Math.random() * Math.floor(9));
    while (bord[row][col] !== 0) {
        row = Math.floor(Math.random() * Math.floor(9));
        col = Math.floor(Math.random() * Math.floor(9));
    }
    return { row, col };
}

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>console.log(`Sever started on port ${PORT}`));