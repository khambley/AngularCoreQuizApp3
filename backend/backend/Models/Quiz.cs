

using System.Collections.Generic;

namespace backend.Models
{
    public class Quiz
    {
        public int QuizId { get; set; }
        public string Title { get; set; }
        public List<Question> Questions { get; set; }


    }
}
