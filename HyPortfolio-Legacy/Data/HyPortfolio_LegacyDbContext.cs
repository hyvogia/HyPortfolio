using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HyPortfolio_Legacy.Models;

namespace HyPortfolio_Legacy.Data
{
    public class HyPortfolio_LegacyDbContext : DbContext
    {
        public HyPortfolio_LegacyDbContext (DbContextOptions<HyPortfolio_LegacyDbContext> options)
            : base(options)
        {
        }

        public DbSet<HyPortfolio_Legacy.Models.About> About { get; set; } = default!;
        public DbSet<HyPortfolio_Legacy.Models.Blog> Blog { get; set; } = default!;
        public DbSet<HyPortfolio_Legacy.Models.Contact> Contact { get; set; } = default!;
        public DbSet<HyPortfolio_Legacy.Models.Portfolio> Portfolio { get; set; } = default!;
        public DbSet<HyPortfolio_Legacy.Models.Service> Service { get; set; } = default!;
    }
}
