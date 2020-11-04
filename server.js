const express=require('express');
const { serialize } = require('v8');
const fs =require('fs');
const { reset } = require('nodemon');


const app=express();
app.use(express.json({extended:false}));


app.post('/verify',async(req,res)=>
    {

       
        const suduko_json = await fs.readFileSync('./suduko.json','utf-8');
        let suduko_js=JSON.parse(suduko_json);
        const bord =suduko_js["bord"];

        let counter=Number(suduko_js["counter"]);
        if (counter===0){
            rst();
        }
        
        /*let row and colum random number */
        let [row1,col1]=suduko_js["index"];

        /*get number from client*/

        const clientnumber=Number(req.body.number);
        
        
        //row test
        for(let i=0;i<9;i++)
        {
            if(bord[row1][i]===clientnumber)
            {   
                //reset json file function
                    rst();
                    return res.status(200).json({message:'Fail',bord:bord});
            }
        }

        //col test
        for(let i=0;i<9;i++)
        {
            if(bord[i][col1]===clientnumber)
            {  
                //reset json file function
                rst();
                return res.status(200).json({message:'Fail',bord:bord});
            }
        }

        //box text
        let secrow,seccol=0
        switch(row1){

            case 3,4,5:
                   secrow=3;
            case 6,7,8:
                   secrow=6;  
        }
        switch(col1){

            case 3,4,5:
                 seccol=3;
            case 6,7,8:
                 seccol=6;  
        }
        for(let i=secrow;i<secrow+3;i++){
            for(let j=seccol;j<seccol+3;j++){
                if(bord[i][j]===clientnumber){
                    rst();
                    return res.status(200).json({message:'Fail',bord:bord});
                }
            }
        }


        //success
        if(counter===3){

            //reset json file function
            rst();

            return res.json({message:'Valid',bord:bord});
           
        }else{

            counter=counter+1;
            bord[row1][col1]=clientnumber;
            /*let row and colum random number */
            let {row ,col}=random(bord);
            let ref={"index":[row,col],"counter":counter,"bord":bord};
            await fs.writeFileSync(`./suduko.json`,JSON.stringify(ref));


            
            /*sent col and row number to client*/
            let respons={message:`row:${row+1} and colum:${col+1}?`, bord:bord}
            return res.status(200).json(respons);
       

        }
    }
)

function rst(){
    let bord= [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
    let ref={"index":[0,0],"counter":0,"bord":bord};
    fs.writeFileSync(`./suduko.json`,JSON.stringify(ref));
}
random=(bord)=> {
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