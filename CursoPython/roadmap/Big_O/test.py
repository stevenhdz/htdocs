from typing import List

# O(1)

def sumArrays(nums1: List[int], nums2: List[int]) -> List[int]:
    for i in range(3):  
        nums1[i] += nums2[i]
    return nums1

# O(n^2)

def sumArrays2(nums1: List[int], nums2: List[int]) -> List[int]:
    for i in range(len(nums1)):
        for j in range(len(nums2)):
            nums1[i] += nums2[j]
    return nums1

# O(1^2)

def sumArrays3(nums1: List[int], nums2: List[int]) -> List[int]:
    for i in range(3):
        for j in range(3):
            nums1[i] += nums2[j]
    return nums1

# O(n)

def linearSearch(nums: List[int], target: int) -> int:
    for i in range(len(nums)):
        if nums[i] == target:
            return i
    return -1


# O(log n)

def binarySearch(nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# O(n log n)

def mergeSort(nums: List[int]) -> List[int]:
    if len(nums) > 1:
        mid = len(nums) // 2
        left = nums[:mid]
        right = nums[mid:]
        mergeSort(left)
        mergeSort(right)
        i = j = k = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                nums[k] = left[i]
                i += 1
            else:
                nums[k] = right[j]
                j += 1
            k += 1
        while i < len(left):
            nums[k] = left[i]
            i += 1
            k += 1

# O (n!)

def factorial(n: int) -> int:
    if n == 0:
        return 1
    return n * factorial(n - 1)

if __name__ == "__main__":
    print(sumArrays([1, 2, 3], [2, 3, 4]))
    print(sumArrays2([1, 2, 3], [2, 3, 4]))
    print(linearSearch([1, 2, 3, 4, 5], 3))
    print(binarySearch([1, 2, 3, 4, 5], 3))
    print(mergeSort([1, 2, 3, 4, 5]))
    print(factorial(5))