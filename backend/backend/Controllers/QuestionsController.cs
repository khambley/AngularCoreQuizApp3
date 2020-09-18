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
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return new Question[] { 
                new Question() { Text = "Question Text 1" },
                new Question() { Text = "Question Text 2" }
            };
        }

        [HttpPost]
        public void Post([FromBody]Models.Question question)
        {

        }
    
    }
    

    
}