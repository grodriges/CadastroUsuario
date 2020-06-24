using System;
namespace CadastroUsuario.API
{
    public class Usuarios
    {
        public Usuarios(int id, string nome, string email, DateTime dtNascimento, string telefone) 
        {
            this.Id = id;
            this.Nome = nome;
            this.Email = email;
            this.DtNascimento = dtNascimento;
            this.Telefone = telefone;
               
        }
        public int Id { get; }
        public string Nome { get; }
        public string Email { get; }
        public DateTime DtNascimento { get; }
        public string Telefone { get; }
    }
}