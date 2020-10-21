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
		public double CorrectAnswers { get; set; }
		public double TotalQuestions { get; set; }
		public double Percentage { get; set; }


	}
}
