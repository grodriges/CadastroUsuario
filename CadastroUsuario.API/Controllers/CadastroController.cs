using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CadastroUsuario.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CadastroController : ControllerBase
    {

        public List<Usuarios> DadosUsuarioMock()
        {
            var _usuarios = new List<Usuarios>();
            var _data = new DateTime();
            var _usuario = new Usuarios(1, "Teste", "teste@teste.com.br", _data.Date, "3135647892");

            _usuarios.Add(_usuario);

            return _usuarios;
        }

        [HttpGet]
        public List<Usuarios> Get()
        {
            var _dadosUsuarios = new List<Usuarios>();
            _dadosUsuarios = DadosUsuarioMock();
            return _dadosUsuarios;
        }
    }
}