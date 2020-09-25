using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
	public class Question
	{
		public int QuestionId { get; set; }
		public string QuestionText { get; set; }
		public string CorrectAnswer { get; set; }
		public string Answer1 { get; set; }
		public string Answer2 { get; set; }
		public string Answer3 { get; set; }

        public int QuizId { get; set; }
        //public Quiz Quiz { get; set; }



    }
}
