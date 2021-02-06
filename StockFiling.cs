using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DividendWebApp
{
    public class StockFiling: Stock
    {
        public string ReportNumber { get; set; }
        public string ReportUrl { get; set; }
        public string FilingDate { get; set; }
        public string ReportType { get; set; }
        public string ReportName { get; set; }
    }
}
