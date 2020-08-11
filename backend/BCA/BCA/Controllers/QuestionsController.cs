using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using BCA.Data;
using BCA.Data.Models;

namespace BCA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly IDataRepository _dataRepository;
        public QuestionsController(IDataRepository dataRepository)
        {
            // TODO - set reference to _dataRepository
            //_dataRepository = new DataRepository();
            _dataRepository = dataRepository;
        }

/*        [HttpGet]
        public IEnumerable<QuestionGetManyResponse> GetQuestions()
        {
            // TODO - get questions from data repository
            var questions = _dataRepository.GetQuestions();
            // TODO - return questions in the response
            return questions;
        }*/

        [HttpGet]
        public IEnumerable<QuestionGetManyResponse> GetQuestions(string search)
        {  
            //var questions = _dataRepository.GetQuestions();
            //return questions;

            if (string.IsNullOrEmpty(search))
            {
                return _dataRepository.GetQuestions();
            } 
            else
            {
                // call data repository question search
                return _dataRepository.GetQuestionsBySearch(search);
            }
        }
    }
}
