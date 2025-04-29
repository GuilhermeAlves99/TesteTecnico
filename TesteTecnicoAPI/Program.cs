var builder = WebApplication.CreateBuilder(args);

// Adiciona os serviços de controladores
builder.Services.AddControllers();

// Configura o CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Adiciona o Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "TesteTecnicoAPI",
        Version = "v1",
        Description = "API para gerenciar pessoas"
    });
});

var app = builder.Build();

// Configura o middleware do Swagger
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "TesteTecnicoAPI v1");
    c.RoutePrefix = string.Empty; 
});

app.UseHttpsRedirection();
app.UseCors("PermitirAngular");
app.UseAuthorization();
app.MapControllers();

app.Run();