using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
	public class SeedData
	{
		public static void SeedDatabase(QuizContext context)
		{
			context.Database.Migrate();

			if(context.Questions.Count() == 0)
			{
				context.Questions.AddRange(
					new Question
					{
						QuestionText = "This is test question 1.",
						CorrectAnswer = "This is the correct answer for question 1.",
						Answer1 = "This is answer 1.",
						Answer2 = "This is answer 2.",
						Answer3 = "This is answer 3.",
					},
					new Question
					{
						QuestionText = "This is test question 2.",
						CorrectAnswer = "This is the correct answer for question 2.",
						Answer1 = "This is answer 1.",
						Answer2 = "This is answer 2.",
						Answer3 = "This is answer 3.",
					},
					new Question
					{
						QuestionText = "<p>This is test question 3.</p>",
						CorrectAnswer = "This is the correct answer for question 3.",
						Answer1 = "This is answer 1.",
						Answer2 = "This is answer 2.",
						Answer3 = "This is answer 3.",
					},
					new Question
					{
						QuestionText = "<h1>This is test question 4.</h1>",
						CorrectAnswer = "This is the correct answer for question 4.",
						Answer1 = "This is answer 1.",
						Answer2 = "This is answer 2.",
						Answer3 = "This is answer 3.",
					},
					new Question
					{
						QuestionText = "<h3>This is test question 5.</h3>",
						CorrectAnswer = "This is the correct answer for question 5.",
						Answer1 = "This is answer 1.",
						Answer2 = "This is answer 2.",
						Answer3 = "This is answer 3.",
					}
					);
				context.SaveChanges();
					
			}
		}
	}
}
