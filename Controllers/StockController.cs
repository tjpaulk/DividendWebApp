using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DividendWebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StockController : ControllerBase
    {
        //private static readonly string[] s1 = { "ABC", "ABC Corp", "12345" };
        //private static readonly string[] s2 = { "BCD", "BCD Inc", "67890" };
        //private static readonly string[] s3 = {"EFG", "EFG Brands", "53256"};

        //private static readonly string[][] stockInfo = { s1, s2, s3 };

        private static readonly List<string[]> stockInfo = new List<string[]>();
        public StockController()
        {
            stockInfo.Clear();
            stockInfo.Add(new string[] { "ABC", "ABC Corp", "12345" });
            stockInfo.Add(new string[] { "BCD", "BCD Inc", "67890" });
            stockInfo.Add(new string[] { "EFG", "EFG Brands", "53256" });

        }

           
            //private readonly ILogger<StockController> _logger;

            //public StockController(ILogger<StockController> logger)
            //{
            //    _logger = logger;
            //}

        [HttpGet]
        public IEnumerable<Stock> Get()
        {
            List<Stock> st = new List<Stock>();

            foreach (var s in stockInfo)
            {
                st.Add(new Stock
                {
                    Ticker = s[0],
                    Name = s[1],
                    CIK = s[2]
                });
            }
            return st;

        }
    }
}
