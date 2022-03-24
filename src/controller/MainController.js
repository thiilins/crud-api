const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { red } = require("cli-color");
const MainController = {
  index(req, res) {
    res.send("Olá Mundo");
  },
  async registerNewUser(req, res) {
    try {
      const { name, email, password, username } = req.body;
      const user = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        username,
        avatar: null,
      });
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Não foi possível efetuar o registro do usuário no momento!",
      });
    }
  },
  async findUser(req, res) {
    try {
      const { id } = req.params;
      if (!id || id == "undefined") {
        const users = await User.findAll();
        return res.status(200).json(users);
      }
      const user = await User.findByPk(id);
      if (!user || user == "undefined") {
        return res.status(404).json({ error: "Usuário não localizado!" });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Não foi possível atender sua solicitação no momento!",
      });
    }
  },
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.destroy({ where: { id } });
      if (!user || user == "undefined") {
        return res.status(404).json({ error: "Usuário não localizado!" });
      }
      return res.status(200).json({
        message: "Usuário deletado com sucesso!",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Não foi possível efetuar o registro do usuário no momento!",
      });
    }
  },
  async updateUser(req, res) {
    try {
      const { id } = req.params;

      const { name, email,password, username, avatar } = req.body;
      if (password) {
        password = bcrypt.hashSync(password, 10);
      }
      const user = await User.update(
        {
          name,
          email,
          password,
          username,
          avatar,
        },
        { where: { id } }
      );
      if (!user || user == "undefined") {
        return res.status(404).json({ error: "Usuário não localizado!" });
      }
      return res.status(200).json;
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Não foi possível efetuar a alteração no momento!",
      });
    }
  },
};
module.exports = MainController;
