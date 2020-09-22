using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;

namespace backend.Models
{
	public class QuizContext : DbContext
	{
		public QuizContext(DbContextOptions<QuizContext> options) : base(options) { }

		public DbSet<Question> Questions { get; set; }

		public DbSet<backend.Models.Quiz> Quiz { get; set; }
	}
}
