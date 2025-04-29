using Microsoft.AspNetCore.Mvc;
using PessoasApi.Models;

namespace PessoasApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var pessoas = MockPessoas();
            return Ok(pessoas);
        }

        private List<Pessoa> MockPessoas()
        {
            var lista = new List<Pessoa>();
            for (int i = 1; i <= 30; i++)
            {
                lista.Add(new Pessoa
                {
                    Cpf = $"000.000.000-{i:D2}",
                    Nome = $"Pessoa {i}",
                    Genero = i % 2 == 0 ? "Masculino" : "Feminino",
                    Endereco = $"Rua {i}",
                    Idade = 20 + (i % 30),
                    Municipio = $"Cidade {i}",
                    Estado = "SP"
                });
            }
            return lista;
        }
    }
}
