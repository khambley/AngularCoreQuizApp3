using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
	public class QuizAttempt
	{
		public int Id { get; set; }
		public string UserId { get; set; }
		public int QuizId { get; set; }
		public DateTime AttemptDate { get; set; }
		public int CorrectAnswers { get; set; }

	}
}
