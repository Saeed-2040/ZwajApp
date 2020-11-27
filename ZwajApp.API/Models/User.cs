namespace ZwajApp.API.Models
{
    public class User
    {
        internal string username;

        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}