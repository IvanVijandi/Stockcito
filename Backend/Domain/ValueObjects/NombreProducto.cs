using Domain.Common;

namespace Domain.ValueObjects;

public sealed class ProductName : ValueObject
{
    public string Value { get; }

    public ProductName(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            throw new ArgumentException("Product name cannot be empty.", nameof(value));

        if (value.Length < 2 || value.Length > 200)
            throw new ArgumentException("Product name must be between 2 and 200 characters.", nameof(value));

        Value = value.Trim();
    }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        yield return Value;
    }

    public override string ToString() => Value;
}

