const URL_BASE = "http://localhost:3000";

const api = {
  async buscarPensamentos() {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos`);
      return await response.data;
    } catch (err) {
      alert("Erro ao buscar pensamentos");
      throw err;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento);
      return await response.data;
    } catch (err) {
      alert("Erro ao salvar pensamentos");
      throw err;
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
      return await response.data;
    } catch (err) {
      alert("Erro ao buscar pensamento");
      throw err;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento);
      return await response.data;
    } catch (err) {
      alert("Erro ao editar pensamento");
      throw err;
    }
  },

  async excluirPensamento(id) {
    try {
      await axios.delete(`${URL_BASE}/pensamentos/${id}`);
    } catch (err) {
      alert("Erro ao excluir pensamento");
      throw err;
    }
  },
};

export default api;
