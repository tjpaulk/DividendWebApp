using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;

namespace DividendWebApp.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class StockFilingController : ControllerBase
    {
        public readonly string csvPath = "E:/MyPyProjects/DividendWebApp/Controllers/filing_list.csv";

        private readonly List<StockFiling> query = new List<StockFiling>();
        public StockFilingController()
        {
            query.Clear();
            query =
                   System.IO.File.ReadAllLines(csvPath)
                       .Where(l => l.Length > 1)
                       .Skip(1)
                       .Select(l =>
                       {
                           var columns = l.Split(',');
                           return new StockFiling
                           {
                               ReportNumber = columns[0],
                               FilingDate = columns[1],
                               ReportUrl = columns[2],
                               ReportType = columns[3],
                               ReportName = columns[4],
                               CIK = columns[5]
                           };

                       })
                       .Take(10)
                       .ToList();
        }


        [HttpGet]
        public IEnumerable<StockFiling> Get()
        {
            // var filings = query
            List<StockFiling> sf = new List<StockFiling>();

            foreach (var f in query)
            {
                sf.Add(new StockFiling
                {
                    ReportNumber = f.ReportNumber,
                    FilingDate = f.FilingDate,
                    ReportUrl = f.ReportUrl,
                    ReportType = f.ReportType,
                    ReportName = f.ReportName,
                    CIK = f.CIK

                });
            }
            return sf;

        }


    }
}
