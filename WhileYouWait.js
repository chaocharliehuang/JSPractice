var daysUntilMyBirthday = 60;
var message = "";
while (daysUntilMyBirthday >= 0) {
    if (daysUntilMyBirthday === 0) {
        message = "♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*\n" + 
                  "♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪\n" + 
                  "*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«";
    } else {
        if (daysUntilMyBirthday >= 5) {
            message = daysUntilMyBirthday + " days until my birthday.";
            if (daysUntilMyBirthday > 30) {
                message += " Such a long time... :(";
            } else {
                message += " Almost there! :)"
            }
        } else {
            message = daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!!";
        }
    }
    console.log(message);
    daysUntilMyBirthday -= 1;
}