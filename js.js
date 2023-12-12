
        // دریافت رشته از کاربر
        var inputString = prompt("لطفاً یک رشته وارد کنید:");

        // دریافت کاراکتر از کاربر
        var inputChar = prompt("لطفاً یک کاراکتر وارد کنید:");
        
        // یافتن ایندکس از ابتدا و انتها
        var indexFromStart = inputString.indexOf(inputChar);
        var indexFromEnd = inputString.lastIndexOf(inputChar);
        
        // نمایش پیغام با شماره ایندکس‌ها
        alert(`شماره ایندکس کاراکتر '${inputChar}' از ابتدا: ${indexFromStart}\nشماره ایندکس کاراکتر '${inputChar}' از انتها: ${indexFromEnd}`);