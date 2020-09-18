using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase 
    {
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return new Question[] { 
                new Question() { QuestionText = "Question Text 1" },
                new Question() { QuestionText = "Question Text 2" }
            };
        }

        [HttpPost]
        public void Post([FromBody]Models.Question question)
        {
            context.Questions.Add(new Question() { QuestionText = "test" });
        }
    
    }
    

    
}