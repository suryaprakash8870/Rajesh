import { Router } from "express";
import DashboardData from "./models/dashboard";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const newData = req.body;

    const createdData = await DashboardData.create(newData);

    res.status(201).send(createdData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const idToUpdate = req.params.id;
    const updatedData = req.body;

    const result = await DashboardData.findByIdAndUpdate(
      idToUpdate,
      updatedData,
      { new: true }
    );

    if (!result) {
      return res.status(404).send("Data not found");
    }

    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
