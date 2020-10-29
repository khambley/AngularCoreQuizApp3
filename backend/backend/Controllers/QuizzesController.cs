using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Authorization;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizzesController : ControllerBase
    {
        private readonly QuizContext _context;

        public QuizzesController(QuizContext context)
        {
            _context = context;
        }

        // GET: api/Quizzes
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quiz>>> GetQuizzes()
        {
            var userId = HttpContext.User.Claims.First().Value;
            return await _context.Quiz
                .Where(q => q.OwnerId == userId)
                .ToListAsync();
        }
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<Quiz>>> GetAllQuizzes()
        {
            return await _context.Quiz
                .ToListAsync();
        }

        // GET: api/Quizzes/5
        [HttpGet("quiz/{id}")]
        public async Task<ActionResult<Quiz>> GetQuiz(int id)
        {
            var quiz = await _context.Quiz.FindAsync(id);

            if (quiz == null)
            {
                return NotFound();
            }

            return quiz;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<QuizAttempt>> GetQuizAttempt(int id)
        {
            var quizAttempt = await _context.QuizAttempts.FindAsync(id);

            if (quizAttempt == null)
            {
                return NotFound();
            }

            return quizAttempt;
        }

        // PUT: api/Quizzes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuiz(int id, Quiz quiz)
        {
            if (id != quiz.QuizId)
            {
                return BadRequest();
            }

            _context.Entry(quiz).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuizExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Quizzes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Quiz>> PostQuiz(Quiz quiz)
        {
            var userId = HttpContext.User.Claims.First().Value;

            quiz.OwnerId = userId;

            _context.Quiz.Add(quiz);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQuiz", new { id = quiz.QuizId }, quiz);
        }
        [Authorize]
        [HttpPost("{id}")]
        public async Task<ActionResult<QuizAttempt>> PostQuizAttempt(int id, QuizAttempt quizAttempt)
        {
            var userId = HttpContext.User.Claims.First().Value;

            quizAttempt.UserId = userId;

            var quiz = await _context.Quiz.FindAsync(id);
            quizAttempt.QuizId = quiz.QuizId;

            quizAttempt.Percentage = (quizAttempt.CorrectAnswers / quizAttempt.TotalQuestions) * 100;

            _context.QuizAttempts.Add(quizAttempt);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQuizAttempt", new { id = quizAttempt.Id }, quizAttempt);

        }

        // DELETE: api/Quizzes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Quiz>> DeleteQuiz(int id)
        {
            var quiz = await _context.Quiz.FindAsync(id);
            if (quiz == null)
            {
                return NotFound();
            }

            _context.Quiz.Remove(quiz);
            await _context.SaveChangesAsync();

            return quiz;
        }

        private bool QuizExists(int id)
        {
            return _context.Quiz.Any(e => e.QuizId == id);
        }
    }
}
