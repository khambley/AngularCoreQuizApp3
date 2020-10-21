using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class ChangedPropertiesToDouble : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "TotalQuestions",
                table: "QuizAttempts",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<double>(
                name: "Percentage",
                table: "QuizAttempts",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<double>(
                name: "CorrectAnswers",
                table: "QuizAttempts",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "TotalQuestions",
                table: "QuizAttempts",
                type: "int",
                nullable: false,
                oldClrType: typeof(double));

            migrationBuilder.AlterColumn<int>(
                name: "Percentage",
                table: "QuizAttempts",
                type: "int",
                nullable: false,
                oldClrType: typeof(double));

            migrationBuilder.AlterColumn<int>(
                name: "CorrectAnswers",
                table: "QuizAttempts",
                type: "int",
                nullable: false,
                oldClrType: typeof(double));
        }
    }
}
