loadMaxFile "models/123.max"
for c in cameras where classof c != targetobject do render camera:c outputfile:("123_"+c.name+".jpg")
quitMax #noPrompt