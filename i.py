def twoSum(nums, target: int):
    length = len(nums)
    output = []
    for i in range(length):
        j=i+1
        while (j<len(nums)):
            if (nums[i]+nums[j])==target:
                output.append(i)
                output.append(j) 
            j+=1
    print(output)
    return output

nums = [3,2,4]
twoSum(nums,6)