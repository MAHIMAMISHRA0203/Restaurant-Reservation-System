$images = @{
    "chole-bhature.jpg" = "https://i.imgur.com/M1JKyqF.jpg"
    "veg-biryani.jpg" = "https://i.imgur.com/2Fy8Tkq.jpg"
    "pizza.jpg" = "https://i.imgur.com/3XtKjGx.jpg"
    "sandwich.jpg" = "https://i.imgur.com/4KqLhNp.jpg"
    "masala-dosa.jpg" = "https://i.imgur.com/5MnRtWq.jpg"
    "momos.jpg" = "https://i.imgur.com/6PkQrSt.jpg"
}

foreach ($image in $images.GetEnumerator()) {
    $outputPath = "public\images\$($image.Key)"
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}
