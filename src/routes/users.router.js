import { Router } from "express";
import { UserManagerDB } from "../dao/UserManagerDB.js";

const router = Router();
const prod = new UserManagerDB();

router.get("/", async (req, res) => {
    let { limit, page, query, sort } = req.query;
    try {
        const productos = await prod.getUsers(limit, page, query, sort);
        res.render("products", productos);
    } catch (err) {
        res.status(400).send(err);
    }
});
router.get("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        const foundprod = await prod.getUserById(id);
        res.render("user", foundprod);
    } catch (error) {
        res.status(404).send({
            error: "Producto no encontrado",
            servererror: error,
        });
    }
});

export default router;
