def find_needle(haystack,needle):
    if needle == haystack or needle == "":
            return 0 

    for i in range(len(haystack)-len(needle)+1):
        if haystack[i:i+len(needle)] == needle:
            return i 
        

print(find_needle("hello", "ll"))

# a = ("a", "b", "c", "d", "e", "f", "g", "h")
# x = slice(0, 8, 3)
# print(a[slice(0, 8, 3)])