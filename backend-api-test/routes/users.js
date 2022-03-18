import express from "express";
import mockdata from "./data/MOCK_DATA copy.js";
const router = express.Router();

router.get("/", (req, res) => {
    if(req.query.page){
        
        let page = req.query.page;
        page = parseInt(page);
        let EndingNumber = 10 * page;
        let StartingNumber = EndingNumber - 10;
        if(page>100){
            res.status(404).send('Max page number is 100');
            return
        }
        const UsersPageWise = mockdata.slice(StartingNumber, EndingNumber);
     
        res.send(UsersPageWise);
        return
    }
  res.send(mockdata);
});

router.get("/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const FoundUser = mockdata[id - 1];
  res.send(FoundUser);
});


export default router;
