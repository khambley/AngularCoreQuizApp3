using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class ChangedPercentagePropertyToInt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Percentage",
                table: "QuizAttempts",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Percentage",
                table: "QuizAttempts",
                type: "float",
                nullable: false,
                oldClrType: typeof(int));
        }
    }
}
